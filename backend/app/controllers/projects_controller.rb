class ProjectsController < ApplicationController
  before_action :authorized, only: [:index, :show, :update, :create, :destroy]

  def index
    projects = Project.where(user: @user)
    render json: projects
  end

  def show
    project = Project.find_by(id: params[:id], user: @user)
    
    if project
      render json: project, include: {
        project_members: {
          include: :user 
        },
        task_buckets: {
          include: :tasks
        }
      }
    elsif
      render json: { error: "That project either doesn't exist or doesn't belong to you!" }
    end
  end

  def create
    project = Project.new(project_params)
    project.user = @user
    project.save

    ProjectMember.create(
      project: project,
      user: @user,
      role: "Admin"
    )

    render json: project
  end

  def update
    project = Project.find(params[:id])
    project.update(project_params)

    render json: project, include: {
      project_members: {
        include: :user 
      },
      task_buckets: {
        include: :tasks
      }
    }
  end

  def destroy
    project = Project.find(params[:id])

    if project.destroy
      render json: { success: true}
    end
  end

  private

  def project_params
    params.require(:project).permit(:name, :description, :start_date, :due_date, :actual_completion_date, :status, :banner, :favorite);
  end
  
end