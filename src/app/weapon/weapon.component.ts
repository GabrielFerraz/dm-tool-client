import { Component, OnInit } from '@angular/core';
import { Weapon } from './weapon';

@Component({
  selector: 'app-weapon',
  templateUrl: './weapon.component.html',
  styleUrls: ['./weapon.component.scss']
})
export class WeaponComponent implements OnInit {

	weapon: Weapon = {
		name: 'teste',
    price: 10,
    damageType: 'Piercing',
    type: 'Simple',
    range: '0',
    hands: '1',
    damage: '1d6',
    critRange: '18-20',
    critModifier: 2
	};

	damageTypes = [
		"Slashing",
		"Bludgeoning",
		"Piercing"
	];

	weaponTypes = [
		"Simple",
		"Martial"
	];

  constructor() { }

  ngOnInit() {
  }

}
