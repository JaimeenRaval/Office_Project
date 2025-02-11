from flask import Blueprint, request, jsonify
from app import mongo
from flask_jwt_extended import jwt_required, get_jwt_identity

orders_bp = Blueprint('orders', __name__)

@orders_bp.route('/create', methods=['POST'])
@jwt_required()
def create_order():
    data = request.json
    user_id = get_jwt_identity()
    
    order = {
        "user_id": user_id,
        "items": data["items"],
        "total_price": data["total_price"],
        "status": "Pending"
    }

    mongo.db.orders.insert_one(order)
    return jsonify({"message": "Order placed successfully"}), 201
