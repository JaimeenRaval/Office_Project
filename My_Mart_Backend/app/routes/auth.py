from flask import Blueprint, request, jsonify
from app import mongo
from app.utils.auth_utils import hash_password, check_password
from flask_jwt_extended import create_access_token

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/register', methods=['POST'])
def register():
    data = request.json
    existing_user = mongo.db.users.find_one({"email": data["email"]})

    if existing_user:
        return jsonify({"message": "User already exists"}), 400

    user = {
        "username": data["username"],
        "email": data["email"],
        "password_hash": hash_password(data["password"])
    }

    mongo.db.users.insert_one(user)
    return jsonify({"message": "User registered successfully"}), 201

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.json
    user = mongo.db.users.find_one({"email": data["email"]})

    if not user or not check_password(data["password"], user["password_hash"]):
        return jsonify({"message": "Invalid credentials"}), 401

    access_token = create_access_token(identity=str(user["_id"]))
    return jsonify({"access_token": access_token}), 200
