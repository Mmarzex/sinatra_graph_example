require 'sinatra'
require 'pg'
require 'json'

get '/' do
    render :html, :index
end

get '/test' do
    conn = PG::Connection.open(:dbname => 'sinatra_test', :user => 'maxmarze')
    res = conn.exec('SELECT * FROM frank.sinatra')
    (res.map{ |x| x }).to_json
end

get '/test_two' do
    conn = PG::Connection.open(:dbname => 'sinatra_test', :user => 'maxmarze')
    res = conn.exec('SELECT * FROM frank.sinatra')
    labels = res[0].keys
    data = res.map(&:values).inject { |sum, n| sum = [sum[0].to_i + n[0].to_i, sum[1].to_i + n[1].to_i]}
    {:labels => labels, :data => data}.to_json
end

