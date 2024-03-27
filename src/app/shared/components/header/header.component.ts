import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemePalette } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, MatTabsModule, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  links = [
    { 'titulo': 'Dasboard', 'url': '/' },
    { 'titulo': 'Produtos', 'url': '/products' },
    { 'titulo': 'Teste', 'url': '/test' }
  ]
  @Input() activeLink: string = '/';
  constructor(private router: Router){

  }

  ngOnInit(): void {
  }
}
