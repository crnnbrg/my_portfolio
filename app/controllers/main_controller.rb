class MainController < ApplicationController
  def index
    @skills = Skill.all
    @projects = Project.all
  end
end
