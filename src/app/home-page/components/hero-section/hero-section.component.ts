import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  imports: [
  ],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent implements AfterViewInit {

  @ViewChild('textContainer') textContainer!: ElementRef<HTMLElement>;

  words: string[] = ['Hola', 'Mundo', 'Frontend', 'Animación'];
  wordIndex: number = 0;

  // Configuración
  readonly fadeInDelayPerLetter = 150;
  readonly fadeOutDelayPerLetter = 100;
  readonly animationDuration = 900;
  readonly visibleTime = 2000;

  ngAfterViewInit(): void {
    this.animateWord(this.words[this.wordIndex]);
  }

  animateWord(word: string): void {
    const container = this.textContainer.nativeElement;
    container.innerHTML = ''; // Limpiar palabra anterior

    const letters = [...word].map((char) => {
      const span = document.createElement('span');
      span.textContent = char;
      span.classList.add('letter');
      container.appendChild(span);
      return span;
    });

    // Animación de entrada
    letters.forEach((letter, i) => {
      setTimeout(() => {
        letter.classList.add('fade-in-up');
      }, i * this.fadeInDelayPerLetter);
    });

    const timeToStartFadeOut =
      (letters.length - 1) * this.fadeInDelayPerLetter +
      this.animationDuration +
      this.visibleTime;

    const totalAnimationTime =
      timeToStartFadeOut +
      (letters.length - 1) * this.fadeOutDelayPerLetter +
      this.animationDuration;

    // Animación de salida
    setTimeout(() => {
      letters.forEach((letter, i) => {
        setTimeout(() => {
          letter.classList.remove('fade-in-up');
          letter.classList.add('fade-out-up');
        }, i * this.fadeOutDelayPerLetter);
      });
    }, timeToStartFadeOut);

    // Siguiente palabra
    setTimeout(() => {
      this.wordIndex = (this.wordIndex + 1) % this.words.length;
      this.animateWord(this.words[this.wordIndex]);
    }, totalAnimationTime);
  }
}
