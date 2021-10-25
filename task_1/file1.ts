@Component(/* ... */)
export class SongsComponent implements OnInit {
  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.store.select(selectSongs).pipe(
      tap((songs) => {
        // if songs are not loaded
        if (!songs) {
          // then dispatch `loadSongs` action
          this.store.dispatch(songsActions.loadSongs());
        }
      }),
      take(1)
    ).subscribe();
  }
}