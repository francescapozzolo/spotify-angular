import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import * as mockData from '../../../data/user.json';
import { AuthService } from './auth.service';
import { CookieService } from 'ngx-cookie-service';
import { of } from 'rxjs';

describe('AuthService', () => {
  let service: AuthService;
  let mockUser: any = (mockData as any).default;
  let httpClientSpy: { post: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    service = new AuthService(httpClientSpy as any)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an object with data and token session', () => {
    const user: any = mockUser.userOk;
    const mockResponse = {
      data: {},
      tokenSession: 'nkdnfjkdfjd'
    }

    httpClientSpy.post.and.returnValue(of(mockResponse));

    service.sendCredentials(user.email, user.password).subscribe(response => {
      const getProperties = Object.keys(response);
      expect(getProperties).toContain('data')
      expect(getProperties).toContain('tokenSession')
    })
  });
});
