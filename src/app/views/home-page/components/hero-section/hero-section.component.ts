import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

// Interface para la tarjeta TI
interface CardItem {
  id: number;
  icon: string;
  title: string;
}

@Component({
  selector: 'app-hero-section',
  imports: [
  ],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent implements AfterViewInit {

  @ViewChild('textContainer') textContainer!: ElementRef<HTMLElement>;

  //Variable para la renderizaciones de las tarjetas TI\
  cards: CardItem[] = [
    { id: 1, icon: 'pi pi-image', title: 'Desarrollo Web' },
    { id: 2, icon: 'pi pi-image', title: 'Desarrollo Movil' },
    { id: 3, icon: 'pi pi-image', title: 'Desarrollo Desktop' },
    { id: 4, icon: 'pi pi-image', title: 'QA' },
    { id: 5, icon: 'pi pi-image', title: 'DevOps' },
    { id: 6, icon: 'pi pi-image', title: 'Metodologias Agiles' },
    { id: 7, icon: 'pi pi-image', title: 'Emprendev' },
    { id: 8, icon: 'pi pi-image', title: 'Emprendev' },
  ]

  // Variable para la animación de las letras
  words: string[] = ['Hola', 'Mundo', 'Frontend', 'Animación'];
  wordIndex: number = 0;

  // Configuración de la animacion para las letras
  readonly fadeInDelayPerLetter = 150;
  readonly fadeOutDelayPerLetter = 100;
  readonly animationDuration = 900;
  readonly visibleTime = 2000;

  ngAfterViewInit(): void {
    this.animateWord(this.words[this.wordIndex]);
  }

  private animateWord(word: string): void {
    const container = this.textContainer.nativeElement;
    container.innerHTML = '';

    const letters = this.createLetterSpans(word, container);

    this.animateLettersIn(letters);

    const fadeOutStart = this.calculateFadeOutStart(letters.length);
    const totalTime = this.calculateTotalAnimationTime(letters.length, fadeOutStart);

    setTimeout(() => this.animateLettersOut(letters), fadeOutStart);
    setTimeout(() => this.nextWord(), totalTime);
  }

  private createLetterSpans(word: string, container: HTMLElement): HTMLSpanElement[] {
    return [...word].map(char => {
      const span = document.createElement('span');
      span.textContent = char;
      span.classList.add('letter');
      container.appendChild(span);
      return span;
    });
  }

  private animateLettersIn(letters: HTMLSpanElement[]): void {
    letters.forEach((letter, i) => {
      setTimeout(() => letter.classList.add('fade-in-up'), i * this.fadeInDelayPerLetter);
    });
  }

  private animateLettersOut(letters: HTMLSpanElement[]): void {
    letters.forEach((letter, i) => {
      setTimeout(() => {
        letter.classList.remove('fade-in-up');
        letter.classList.add('fade-out-up');
      }, i * this.fadeOutDelayPerLetter);
    });
  }

  private calculateFadeOutStart(letterCount: number): number {
    return (letterCount - 1) * this.fadeInDelayPerLetter + this.animationDuration + this.visibleTime;
  }

  private calculateTotalAnimationTime(letterCount: number, fadeOutStart: number): number {
    return fadeOutStart + (letterCount - 1) * this.fadeOutDelayPerLetter + this.animationDuration;
  }

  private nextWord(): void {
    this.wordIndex = (this.wordIndex + 1) % this.words.length;
    this.animateWord(this.words[this.wordIndex]);
  }
}
