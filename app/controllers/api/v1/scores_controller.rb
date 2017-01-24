class Api::V1::ScoresController < Api::V1::BaseController

  def index
    respond_with Score.all
  end

  def create
    respond_with :api, :v1, Score.create(score_params)
  end

  def destroy
    respond_with Score.destroy(params[:id])
  end

  def update
    score = Score.find(params["id"])
    score.update_attributes(item_params)
    respond_with score, json: score
  end

  private

  def item_params
    params.require(:score).permit(:name, :score, :high_score, :streak)
  end
end
