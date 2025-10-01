import { Equipment as EquipmentType } from '@/data/characters';

type EquipmentProps = {
  equipment: EquipmentType;
};

export const Equipment = ({ equipment }: EquipmentProps) => {
  return (
    <div className="w-full h-full border-2 border-gray-300 flex flex-col items-center justify-center">
      <div className="w-18 h-18">
        <img src={equipment.headArmor?.imageUrl} alt="Head Armor" />
      </div>
      <div className="w-18 h-18">
        <img src={equipment.necklace?.imageUrl} alt="Necklace" />
      </div>
      <div className="flex flex-row">
        <div className="w-18 h-18">
          <img src={equipment.leftArmArmor?.imageUrl} alt="Left Arm Armor" />
        </div>
        <div className="w-18 h-18">
          <img src={equipment.chestArmor?.imageUrl} alt="Chest Armor" />
        </div>
        <div className="w-18 h-18">
          <img src={equipment.rightArmArmor?.imageUrl} alt="Right Arm Armor" />
        </div>
      </div>
      <div className="flex flex-row">
        <div className="w-18 h-18">
          <img
            src={equipment.leftHandWeapon?.imageUrl}
            alt="Left Hand Weapon"
          />
        </div>

        <div className="w-18 h-18">
          <img
            src={equipment.rightHandWeapon?.imageUrl}
            alt="Right Hand Weapon"
          />
        </div>
      </div>
      <div className="flex flex-row">
        <div className="w-18 h-18">
          <img src={equipment.legsArmor?.imageUrl} alt="Legs Armor" />
        </div>
        <div className="w-18 h-18">
          <img src={equipment.handsRing?.imageUrl} alt="Hands Ring" />
        </div>
      </div>
      <div className="w-18 h-18">
        <img src={equipment.feetArmor?.imageUrl} alt="Feet Armor" />
      </div>
    </div>
  );
};
