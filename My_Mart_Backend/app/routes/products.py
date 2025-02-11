from flask import Blueprint, request, jsonify
from app import mongo
from flask_jwt_extended import jwt_required

products_bp = Blueprint('products', __name__)

@products_bp.route('/', methods=['GET'])
def get_products():
    products = list(mongo.db.products.find({}, {"_id": 0}))
    return jsonify(products), 200

@products_bp.route('/add', methods=['POST'])
@jwt_required()
def add_product():
    data = request.json
    mongo.db.products.insert_one(data)
    return jsonify({"message": "Product added successfully"}), 201
