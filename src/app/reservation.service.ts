import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private apiUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  makeReservation(userId: number, selectedCar: any, fromLocation: string, toLocation: string): Observable<any> {
    const url = `${this.apiUrl}/make-reservation/${userId}`;
    const reservationData = {
      brand: selectedCar?.brand,
      from_location: fromLocation,
      to_location: toLocation
    };
    return this.http.post(url, reservationData);
  }

  getUserReservations(userId: number): Observable<any> {
    const url = `${this.apiUrl}/user-reservations/${userId}`;
    return this.http.get(url);
  }
}
