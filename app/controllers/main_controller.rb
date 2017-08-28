class MainController < ApplicationController
  def index
    @skills = Skill.all
    @projects = Project.take(4)
    @recommendations = Recommendation.all
  end
end
