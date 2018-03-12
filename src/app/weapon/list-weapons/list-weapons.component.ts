import { Component, OnInit } from '@angular/core';
import { WeaponService } from '../weapon.service';
import { Weapon } from '../weapon';

@Component({
  selector: 'app-list-weapons',
  templateUrl: './list-weapons.component.html',
  styleUrls: ['./list-weapons.component.scss'],
  providers: [WeaponService]
})
export class ListWeaponsComponent implements OnInit {

	weapons: any;

  constructor(private weaponService: WeaponService) {
  	this.weapons = [];
 	}

  ngOnInit() {
  	this.weaponService.getWeapons()
  		.subscribe(res => {
  			if (!res) return;
  			this.weapons = res;
  		})
  }

}
