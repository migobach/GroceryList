class Api::ProductsController < ApplicationController

  before_action :set_product, only: [:update, :destroy]

  def index
    render json: Product.all
  end

  def create
    product = Product.new(product_params)
    if product.save
      render json: product
    else
      render json: { errors: product.errors }, status: 422
    end
  end

  def update
    @product.update(purchase: !@product.purchase)
    render json: @product
  end

  def destroy
    @product.destroy
  end

  private

    def product_params
      params.require(:product).permit(:name, :quantity, :category, :purchase)
    end

    def set_product
      @product = Product.find(params[:id])
    end

end
