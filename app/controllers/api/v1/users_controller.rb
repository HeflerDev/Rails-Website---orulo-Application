class Api::V1::UsersController < ApplicationController
  def index
    user = User.all.order(created_at: :desc)
    render json: user
  end

  def create
    user = User.create!(user_params)
    if user
      render json: user
    else
      render json: user.errors
    end
  end

  def show
    @user = User.find(params[:id])
    if user
      render json: user
    else
      render json: user.errors
    end
  end

  def destroy
  end

  private
    def user_params
      params.permit(:name, :password)
    end

    def user 
      @user ||= User.find(params[:id])
    end
end
