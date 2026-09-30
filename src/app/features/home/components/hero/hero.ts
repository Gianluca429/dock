import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

interface HeroSlide {
  image: string;
  label: string;
}

@Component({
  selector: 'app-hero',
  imports: [RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class HeroComponent implements OnInit, OnDestroy {
  readonly slides: HeroSlide[] = [
    {
      image: '/assets/hero-slide-01-workspace.png',
      label: 'Workspace',
    },
    {
      image: '/assets/hero-slide-02-audio.png',
      label: 'Audio',
    },
    {
      image: '/assets/hero-slide-03-power.png',
      label: 'Power',
    },
  ];

  readonly activeIndex = signal(0);
  readonly previousIndex = signal<number | null>(null);

  private autoplayId: ReturnType<typeof setInterval> | null = null;
  private transitionResetId: ReturnType<typeof setTimeout> | null = null;
  private readonly autoplayDelay = 6500;
  private readonly transitionDuration = 850;

  ngOnInit(): void {
    this.startAutoplay();
  }

  ngOnDestroy(): void {
    this.stopAutoplay();

    if (this.transitionResetId) {
      clearTimeout(this.transitionResetId);
    }
  }

  nextSlide(): void {
    const nextIndex = (this.activeIndex() + 1) % this.slides.length;
    this.goToSlide(nextIndex);
  }

  goToSlide(index: number): void {
    if (index === this.activeIndex()) {
      return;
    }

    if (this.transitionResetId) {
      clearTimeout(this.transitionResetId);
    }

    this.previousIndex.set(this.activeIndex());
    this.activeIndex.set(index);

    this.transitionResetId = setTimeout(() => {
      this.previousIndex.set(null);
    }, this.transitionDuration);
  }

  pauseAutoplay(): void {
    this.stopAutoplay();
  }

  resumeAutoplay(): void {
    this.startAutoplay();
  }

  slideClass(index: number): string {
    if (index === this.activeIndex()) {
      return 'hero__slide--active';
    }

    if (index === this.previousIndex()) {
      return 'hero__slide--leaving';
    }

    return 'hero__slide--waiting';
  }

  formatIndex(index: number): string {
    return String(index + 1).padStart(2, '0');
  }

  private startAutoplay(): void {
    this.stopAutoplay();

    this.autoplayId = setInterval(() => {
      this.nextSlide();
    }, this.autoplayDelay);
  }

  private stopAutoplay(): void {
    if (this.autoplayId) {
      clearInterval(this.autoplayId);
      this.autoplayId = null;
    }
  }
}
