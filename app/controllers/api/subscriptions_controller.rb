
class Api::SubscriptionsController < ApplicationController

  def create
    user = current_user
    return false unless user

    @subscription = user.subscription_records.new
    @subscription.channel_id = params[:user_id]

    if @subscription.save
      render 'api/subscriptions/show.json.jbuilder'
    else
      render json: @subscription.errors.full_messages, status: 422
    end

  end

  def destroy
    user = current_user
    return false unless user

    @subscription = Subscription.find_by(
      channel_id: params[:user_id],
      subscriber_id: user.id,
    )

    if @subscription.destroy
      render 'api/subscriptions/show.json.jbuilder'
    else
      render json: ['Unable to unsubscribe'], status: 422
    end
  end

end
