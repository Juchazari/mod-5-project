class ProjectsController < ApplicationController
  before_action :authorized, only: [:index, :show, :update]

  def index
    projects = Project.where(user: @user)
    render json: projects
  end

  def show
    project = Project.find_by(id: params[:id], user: @user)
    
    if project
      render json: project
    elsif
      render json: { error: "That project either doesn't exist or doesn't belong to you!" }
    end
  end

  def update
    Project.find(params[:id]).update(project_params)
  end

  private

  def project_params
    params.require(:project).permit(:name, :description);
  end
  
end