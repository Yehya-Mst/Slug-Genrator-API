import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/app.module';

const request = require('supertest');

describe('SlugController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/api/slug (GET)', async () => {
    return request(app.getHttpServer())
      .get('/api/slug')
      .expect(200)
      .expect((res)=>{
        expect(Array.isArray(res.body)).toBe(true);
      });
  });
  it('/api/slug (POST)', async () => {
    return request(app.getHttpServer()).
      post('/api/slug')
      .send({userString: 'test-id'})
      .expect(201)
      .expect((res)=>{
        expect(res.body).toHaveProperty('id');
        expect(typeof res.body.id).toBe('number');
        expect(res.body).toHaveProperty('slug');
        expect(typeof res.body.slug).toBe('string');
        expect(res.body).toHaveProperty('originalString');
        expect(typeof res.body.originalString).toBe('string');
      })
  });
  it('api/slug/:id (GET)', async () => {
    const postResponse = await request(app.getHttpServer())
      .post('/api/slug')
      .send({userString: 'test-id'})
      .expect(201);
    const id = postResponse.body.id;
    return request(app.getHttpServer())
      .get(`/api/slug/${id}`)
      .expect(200)
      .expect((res)=>{
        expect(res.body).toHaveProperty('id');
        expect(typeof res.body.id).toBe('number');
        expect(res.body).toHaveProperty('slug');
        expect(typeof res.body.slug).toBe('string');
        expect(res.body).toHaveProperty('originalString');
        expect(typeof res.body.originalString).toBe('string');
      });
  });
  it('api/slug/:id (DELETE)', async () => {
    const postResponse = await request(app.getHttpServer())
      .post('/api/slug')
      .send({userString: 'test-id'})
      .expect(201);
   
    const id = Number(postResponse.body.id);
    return request(app.getHttpServer())
      .delete(`/api/slug/${id}`)
      .expect(200);
  });
  it('api/slug/:id (GET) - Not Found', async () => {
    return request(app.getHttpServer())
      .get('/api/slug/non-existent-id')
      .expect(400);
  });
  it('api/slug/:id (DELETE) - Not Found', async () => {
    return request(app.getHttpServer())
      .delete('/api/slug/non-existent-id')
      .expect(400);
  });
  afterAll(async () => {
    await app.close();
  });
});