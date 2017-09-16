class FirstTestController < ApplicationController

  layout "application"

  def index
    render("index")
  end

  def apiGetAll
    @contakts = Contact.all #.offset(2*10).limit(10)

    render :json => @contakts.to_json, :status => 200, :content_type => 'application/json'
  end

  def apiCreate
    @result = {
        status: 'ok',
        result: {}
    }

    @postData = JSON.parse(request.body.read)

    @contakt = Contact.create(
        :name => @postData['name'],
        :surname => @postData['surname'],
        :email => @postData['email'],
        :phone => @postData['phone'],
    )

    @result['result'] = JSON.parse @contakt.to_json

    render :json => @result.to_json, :status => 200, :content_type => 'application/json'
  end

  def apiDelete
    @result = {
        status: 'ok'
    }

    if (Contact.delete(params[:id]) === 0)
      @result['status'] = 'error'
    end

    render :json => @result, :status => 200, :content_type => 'application/json'
  end

  def apiContactSearch
    @result = {
        status: 'ok',
        result: {}
    }

    @postData = JSON.parse(request.body.read)

    @contakt = Contact.findInAll(@postData['query']);

    if (@contakt.count >= 1)
      @result['result'] = JSON.parse @contakt.to_json
    end

    render :json => @result.to_json, :status => 200, :content_type => 'application/json'
  end
end
