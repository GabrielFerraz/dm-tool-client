import { Component, OnInit } from '@angular/core';
import { Weapon } from './weapon';
import { WeaponService } from './weapon.service';


@Component({
  selector: 'app-weapon',
  templateUrl: './weapon.component.html',
  styleUrls: ['./weapon.component.scss'],
  providers: [WeaponService]
})
export class WeaponComponent implements OnInit {

	weapon: Weapon = {
		name: '',
    price: 0,
    damageType: '',
    type: '',
    range: '',
    hands: '',
    damage: '',
    critRange: '',
    critModifier: 0
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

  constructor(private weaponService: WeaponService) { }

  ngOnInit() {
  	this.weaponService.getWeapons()
  		.subscribe(res => console.log(res));
  }

}
