class ProjectsController < ApplicationController
  before_action :authorized, only: [:index, :show, :update, :create]

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

  def create
    project = Project.create(
      user: @user,
      name: params[:name],
      description: params[:description],
      banner: "https://images.unsplash.com/photo-1515871204537-49a5fe66a31f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=974&q=80",
    )

    render json: project
  end

  private

  def project_params
    params.require(:project).permit(:name, :description);
  end
  
end