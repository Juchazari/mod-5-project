class TasksController < ApplicationController
    before_action :authorized, only: [:update, :create]

    def update
        task = Task.find(params[:id])
        task.update(task_params)

        task_bucket = TaskBucket.find(task.task_bucket_id)

        render json: task_bucket, include: :tasks
    end

    def create
        task_bucket = TaskBucket.find(params[:bucket_id])
        Task.create(
            task_bucket: task_bucket,
            name: params[:task_name]
        )

        render json: task_bucket, include: :tasks
    end

    private

    def task_params
        params.require(:task).permit(:task_bucket_id, :name, :description, :due_date, :banner, :completed);
    end
end