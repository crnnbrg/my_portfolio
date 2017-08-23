class MainController < ApplicationController
  def index
    @skills = Skill.all
    @projects = Project.all
    @recommendations = Recommendation.all
  end
end
