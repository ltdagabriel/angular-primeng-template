import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CounterStore } from '../../store/counter.store';
import { ButtonModule } from 'primeng/button';
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { HeaderComponent } from "../../shared/components/header/header.component";

@Component({
    selector: 'app-test',
    standalone: true,
    templateUrl: './test.component.html',
    styleUrl: './test.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [ButtonModule, FooterComponent, HeaderComponent]
})
export class TestComponent {
  readonly store = inject(CounterStore);
}
