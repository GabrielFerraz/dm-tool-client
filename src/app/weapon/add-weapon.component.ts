import { Component, OnInit } from '@angular/core';
import { Weapon } from './weapon';
import { WeaponService } from './weapon.service';


@Component({
  selector: 'app-add-weapon',
  templateUrl: './add-weapon.component.html',
  styleUrls: ['./add-weapon.component.scss'],
  providers: [WeaponService]
})
export class AddWeaponComponent implements OnInit {

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

  }

  saveWeapon() {
  	this.weaponService.createWeapon(this.weapon)
  		.subscribe(res => console.log(res));
  }

}
