class Pokemon {
  constructor(name, abilities, height, baseExperience, sprites, weight, types) {
    this._name = name
    this._height = height
    this._abilities = abilities
    this._baseExperience = baseExperience
    this._sprites = sprites
    this._weight = weight
    this._types = types
  }
 
  get name() {
    return this._capitalize(this._name)
  }

  get abilities() {
    return this._abilitiesFilter(this._abilities)
  }

  get height() {
    return `${this._height}m` 
  }

  get baseExperience() {
    return `${this._baseExperience}/1000` 
  }

  get weight(){
    return `${this._weight}Kg`
  }

  get types(){
    return this._typesFilter(this._types)
  }

  get image() {
    return this._sprites.front_default
  }

  _capitalize(value) {
    return `${value.charAt(0).toUpperCase()}${value.slice(1)}`
  } 

  _abilitiesFilter(abilities) {
    return abilities.map(item => ` ${this._capitalize(item.ability.name)}`)
  }

  _typesFilter(types) {
    return types.map(item => ` ${this._capitalize(item.type.name)}`)
  }
}