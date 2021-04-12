class LikesController < ApplicationController
  def index
    @like = Like.all
    render json: @like
  end

  def create
    @like = Like.new(like_params)
    if @like.save
      render json: @like
    else
      render json: @like.errors
    end
  end

  def filter
    @user = current_user;
    
    if @user
      render json: @user.likes
    else
      render json: @user.error
    end
  end

  def destroy
    @like = Like.find(params[:user_id][:building])
    @like.destroy
  end

  private
    
  def like_params
    params.require(:like).permit(:user_id, :building)
  end
  
end
