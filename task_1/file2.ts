// users.service.ts
@Injectable({
    providedIn: 'root'
  })
  export class UsersService {
    readonly users$ = this.getUsers();
  
    constructor(private readonly http: HttpClient) {}
  
    private getUsers(): Observable<User[]> {
      return this.http.get<User[]>('/users');
    }
  }
  
  // users.component.ts
  @Component({
    template: `
      <child-comp-1 [users]="users$ | async"></child-comp-1>
      <child-comp-2 [users]="users$ | async"></child-comp-2>
    `
  })
  export class UsersComponent {
    readonly users$ = this.usersService.users$;
  
    constructor(private readonly usersService: UsersService) {}
  }