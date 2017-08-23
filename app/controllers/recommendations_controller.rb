class RecommendationsController < ApplicationController
    def index
      @recommendations = Recommendation.all
    end

    def show
    end

    def new
      @recommendation = Recommendation.new
    end

    def edit
    end

    def create
      @recommendations = Recommendation.all
      @user = current_user
      @recommendation = @user.recommendations.new(recommendation_params)

      respond_to do |format|
        if @recommendation.save
          format.html { redirect_to root_path , notice: 'Recommendation was successfully created' }
          format.js
          format.json { render :show, status: :created, location: @recommendation }
        else
          format.html { render :new }
          format.json { render json: @recommendation.errors, status: :unprocessable_entity }
        end
      end
    end


    def update
      respond_to do |format|
        if @recommendation.update(recommendation_params)
          format.html { redirect_to @root_path, notice: 'Recommendation was successfully updated.' }
          format.json { render :show, status: :ok, location: @recommendation }
        else
          format.html { render :edit }
          format.json { render json: @recommendation.errors, status: :unprocessable_entity }
        end
      end
    end


    def destroy
      @recommendation.destroy
      respond_to do |format|
        format.html { redirect_to root_path, notice: 'Recommendation was successfully destroyed.' }
        format.json { head :no_content }
      end
    end

    private
      # Use callbacks to share common setup or constraints between actions.


      # Never trust parameters from the scary internet, only allow the white list through.
      def recommendation_params
        params.require(:recommendation).permit(:name, :detail, :rating)
      end
  end
