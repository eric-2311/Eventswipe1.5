class Api::SessionsController < ApplicationController

    #Creating a new user session
    def create
        #Initialize an instance of users from entered params
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )

        if @user
            #If a user is found, render show page and login user
            login(@user)
            render '/api/users/show'
        else
            #Return error if user is not found
            render json: ['Invalid credentials'], status: 422
        end
    end
end