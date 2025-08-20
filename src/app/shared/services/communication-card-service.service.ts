import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

//Interfaces
import { TemplateCard } from '../../interfaces/TemplateCard';

@Injectable({
  providedIn: 'root'
})
export class CommunicationCardService {

  private communicationCardSubject = new BehaviorSubject<TemplateCard>({id : 0, image: [], title: '', subtitle: '', description: ''});

  communicationCard$ = this.communicationCardSubject.asObservable();

  /** Actualiza el arreglo de tarjetas */
  setInfoCard( card: TemplateCard){
    this.communicationCardSubject.next(card);
  }

  getInfoCard(): TemplateCard {
    return this.communicationCardSubject.value;
  }

}
