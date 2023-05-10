import { Injectable } from '@angular/core'
import {
  AuthChangeEvent,
  AuthSession,
  createClient,
  Session,
  SupabaseClient,
  User,
} from '@supabase/supabase-js'
import { environment } from 'src/environments/environment'

export interface Profile {
  id?: string
  username: string
  avatar_url: string
}

@Injectable({
  providedIn: 'root'
})
export class SupabaseAuthService {
  private supabase: SupabaseClient
  _session: AuthSession | null = null

  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey)
  }

  get session() {
    this.supabase.auth.getSession().then(({ data }) => {
      this._session = data.session
    })
    return this._session
  }

  profile(user: User) {
    return this.supabase
      .from('profiles')
      .select(`username, website, avatar_url`)
      .eq('id', user.id)
      .single()
  }

  authChanges(callback: (event: AuthChangeEvent, session: Session | null) => void) {
    return this.supabase.auth.onAuthStateChange(callback)
  }

  signIn(email: string) {
    return this.supabase.auth.signInWithOtp({ email })
  }

  signOut() {
    return this.supabase.auth.signOut()
  }

  updateProfile(profile: Profile) {
    const update = {
      ...profile,
      updated_at: new Date(),
    }

    return this.supabase.from('profiles').upsert(update)
  }

  downLoadImage(path: string) {
    return this.supabase.storage.from('avatars').download(path)
  }

  uploadAvatar(filePath: string, file: File) {
    return this.supabase.storage.from('avatars').upload(filePath, file)
  }
}

// import { Injectable } from '@angular/core';
// import { AuthChangeEvent, createClient, Session, SupabaseClient, User } from '@supabase/supabase-js';

// import { environment } from '../../environments/environment';

// export interface IUser {
//   email: string;
//   name: string;
//   website: string;
//   url: string;
// }

// @Injectable({
//   providedIn: 'root',
// })
// export class SupabaseService {

//   private supabaseClient: SupabaseClient;

//   constructor() {
//     this.supabaseClient = createClient(environment.supabase.url, environment.supabase.key);
//   }

//   public getUser(): User|null {
//     return this.supabaseClient.auth.user();
//   }

//   public getSession(): Session|null {
//     return this.supabaseClient.auth.session();
//   }

//   public getProfile(): PromiseLike<any> {
//     const user = this.getUser();

//     return this.supabaseClient.from('profiles')
//     .select('username, website, avatar_url')
//     .eq('id', user?.id)
//     .single();
//   }

//   public authChanges(callback: (event: AuthChangeEvent, session: Session | null) => void): any {
//     return this.supabaseClient.auth.onAuthStateChange(callback);
//   }

//   public signIn(email: string): Promise<any> {
//     return this.supabaseClient.auth.signIn({
//       email,
//     });
//   }

//   public signOut(): Promise<any> {
//     return this.supabaseClient.auth.signOut();
//   }

//   public updateProfile(userUpdate: IUser): any {
//     const user = this.getUser();

//     const update = {
//       username: userUpdate.name,
//       website: userUpdate.website,
//       id: user?.id,
//       updated_at: new Date(),
//     };

//     return this.supabaseClient.from('profiles').upsert(update, {
//       returning: 'minimal', // Do not return the value after inserting
//     });
//   }

// }
