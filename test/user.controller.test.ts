import request from 'supertest'
import app from '../server'
import {requestBody} from "./fixtures"

//findUser test function
describe('when searching for users ', () => {

  it('should find the user be provided parameter', async () => {
    const email = requestBody.email;
    const res = await request(app)
      .get('127.0.0.1:5588/api/users/:id')
      .send(email)
      .expect(500);
        
    expect(res.ok).toEqual('test@gmail.com');
  });
});