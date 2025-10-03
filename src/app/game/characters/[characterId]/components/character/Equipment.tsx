import { getCharacter } from '@/data/characters';

type EquipmentProps = {
  equipment: Awaited<ReturnType<typeof getCharacter>>['equipment'];
};

export const Equipment = ({ equipment }: EquipmentProps) => {
  if (!equipment) {
    return null;
  }

  return (
    <div className="w-full h-full border-2 border-gray-300 flex flex-col items-center justify-center">
      <div className="w-18 h-18 border-2 border-gray-300">
        {equipment.headArmorItemId && (
          <img src={equipment.headArmorItemId} alt="Head Armor" />
        )}
      </div>
      <div className="w-18 h-18 border-2 border-gray-300">
        {equipment.necklaceItemId && (
          <img src={equipment.necklaceItemId} alt="Necklace" />
        )}
      </div>
      <div className="flex flex-row">
        <div className="w-18 h-18 border-2 border-gray-300">
          {equipment.leftArmArmorItemId && (
            <img src={equipment.leftArmArmorItemId} alt="Left Arm Armor" />
          )}
        </div>
        <div className="w-18 h-18 border-2 border-gray-300">
          {equipment.chestArmorItemId && (
            <img src={equipment.chestArmorItemId} alt="Chest Armor" />
          )}
        </div>
        <div className="w-18 h-18 border-2 border-gray-300">
          {equipment.rightArmArmorItemId && (
            <img src={equipment.rightArmArmorItemId} alt="Right Arm Armor" />
          )}
        </div>
      </div>
      <div className="flex flex-row">
        <div className="w-18 h-18 border-2 border-gray-300">
          {equipment.leftHandWeaponItemId && (
            <img src={equipment.leftHandWeaponItemId} alt="Left Hand Weapon" />
          )}
        </div>

        <div className="w-18 h-18 border-2 border-gray-300">
          {equipment.rightHandWeaponItemId && (
            <img
              src={equipment.rightHandWeaponItemId}
              alt="Right Hand Weapon"
            />
          )}
        </div>
      </div>
      <div className="flex flex-row">
        <div className="w-18 h-18 border-2 border-gray-300">
          {equipment.legsArmorItemId && (
            <img src={equipment.legsArmorItemId} alt="Legs Armor" />
          )}
        </div>
        <div className="w-18 h-18 border-2 border-gray-300">
          {equipment.handsRingItemId && (
            <img src={equipment.handsRingItemId} alt="Hands Ring" />
          )}
        </div>
      </div>
      <div className="w-18 h-18 border-2 border-gray-300">
        {equipment.feetArmorItemId && (
          <img src={equipment.feetArmorItemId} alt="Feet Armor" />
        )}
      </div>
    </div>
  );
};
