import { Injectable } from '@angular/core';
import { Technology } from '../interfaces/interfaces.interfaces';

@Injectable({
  providedIn: 'root'
})
export class TechnologyService {

  public technologies: Technology[] = [
    {
      name: "Launch vehicle",
      description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      img: '../../../assets/technology/image-launch-vehicle-portrait.jpg',
    },
    {
      name: "Spaceport",
      description: 'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
      img: '../../../assets/technology/image-spaceport-portrait.jpg',
    },
    {
      name: "Space capsule",
      description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
      img: '../../../assets/technology/image-space-capsule-portrait.jpg',
    },
  ]

  constructor() { }

  get getInfoLaunchVehicle(): Technology {
    return this.technologies[0];
  }

  get getInfoSpaceport(): Technology {
    return this.technologies[1];
  }

  get getInfoSpaceCapsule(): Technology {
    return this.technologies[2];
  }
}
