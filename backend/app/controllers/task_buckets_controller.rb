class TaskBucketsController < ApplicationController
    before_action :authorized, only: [:create, :update, :destroy]

    def create
        task_bucket = TaskBucket.create(task_bucket_params)

        render json: task_bucket, include: :tasks
    end

    def update
        TaskBucket.find(params[:id]).update(task_bucket_params)
    end

    def destroy
        task_bucket = TaskBucket.find(params[:id])
        project = Project.find(task_bucket.project_id)

        task_bucket.destroy

        render json: project, include: {
            task_buckets: {
                include: :tasks
            }
        }
    end

    private

    def task_bucket_params
        params.require(:task_bucket).permit(:project_id, :name)
    end
end