class BannersController < ApplicationController
    before_action :authorized, only: [:index]

    def index
        banners = Banner.all
        render json: banners
    end
end