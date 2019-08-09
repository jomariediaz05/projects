<template>
  <div class="content">
    <button class="add-to-cart" @click="addToCart">Add to Cart</button>
    <div class="top-row">
      <div :class="[saleBorderStyle, 'top', 'part']">
        <div class="robot-name">
          {{ selectedParts.head.title }}
          <span v-if="selectedParts.head.onSale" class="sale">Sale!</span>
        </div>
        <img :src="selectedParts.head.src" title="head" />
        <button @click="selectPrevious" class="prev-selector">&#9668;</button>
        <button @click="selectNext" class="next-selector">&#9658;</button>
      </div>
    </div>
    <div class="middle-row">
      <div class="left part">
        <img :src="selectedParts.leftArm.src" title="left-arm" />
        <button @click="selectPrevious" class="prev-selector">&#9650;</button>
        <button @click="selectNext" class="next-selector">&#9660;</button>
      </div>
      <div class="center part">
        <img :src="selectedParts.torso.src" title="torso" />
        <button @click="selectPrevious" class="prev-selector">&#9668;</button>
        <button @click="selectNext" class="next-selector">&#9658;</button>
      </div>
      <div class="right part">
        <img :src="selectedParts.rightArm.src" title="right-arm" />
        <button @click="selectPrevious" class="prev-selector">&#9650;</button>
        <button @click="selectNext" class="next-selector">&#9660;</button>
      </div>
    </div>
    <div class="bottom-row">
      <div class="bottom part">
        <img :src="selectedParts.base.src" title="base" />
        <button @click="selectPrevious" class="prev-selector">&#9668;</button>
        <button @click="selectNext" class="next-selector">&#9658;</button>
      </div>
    </div>
    <div>
      <h1>Card</h1>
      <table>
        <thead>
          <tr>
            <th>Robot Name</th>
            <th class="cost">Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="robot in cart" :key="robot.head.id">
            <td>{{robot.head.title}}</td>
            <td class="cost">{{robot.cost}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import availableParts from '../../data/parts';

function getNextValidIndex(index, length) {
  const incrementedIndex = index + 1;
  return incrementedIndex > length - 1 ? 0 : incrementedIndex;
}

function getPreviousValidIndex(index, length) {
  const decrementedIndex = index - 1;
  return decrementedIndex < 0 ? length - 1 : decrementedIndex;
}

export default {
  name: 'RobotBuilder',
  data() {
    return {
      availableParts,
      selection: {
        head: 0,
        leftArm: 0,
        rightArm: 0,
        torso: 0,
        base: 0,
      },
      cart: [],
    };
  },
  computed: {
    saleBorderStyle() {
      return this.selectedParts.head.onSale ? 'sale-border' : '';
    },
    selectedParts() {
      return {
        head: this.availableParts.heads[this.selection.head],
        leftArm: this.availableParts.arms[this.selection.leftArm],
        rightArm: this.availableParts.arms[this.selection.rightArm],
        torso: this.availableParts.torsos[this.selection.torso],
        base: this.availableParts.bases[this.selection.base],
      };
    },
  },
  methods: {
    addToCart() {
      const robot = this.selectedParts;

      const cost = robot.head.cost
        + robot.leftArm.cost
        + robot.rightArm.cost
        + robot.torso.cost
        + robot.base.cost;

      this.cart.push(Object.assign({}, robot, { cost }));
    },
    selectNext(event) {
      const { title } = event.path[1].getElementsByTagName('IMG')[0];

      switch (title) {
        case 'head':
          this.selection.head = getNextValidIndex(
            this.selection.head,
            this.availableParts.heads.length,
          );
          break;
        case 'left-arm':
          this.selection.leftArm = getNextValidIndex(
            this.selection.leftArm,
            this.availableParts.arms.length,
          );
          break;
        case 'right-arm':
          this.selection.rightArm = getNextValidIndex(
            this.selection.rightArm,
            this.availableParts.arms.length,
          );
          break;
        case 'torso':
          this.selection.torso = getNextValidIndex(
            this.selection.torso,
            this.availableParts.torsos.length,
          );
          break;
        case 'base':
          this.selection.base = getNextValidIndex(
            this.selection.base,
            this.availableParts.bases.length,
          );
          break;
        default:
          break;
      }
    },
    selectPrevious(event) {
      const { title } = event.path[1].getElementsByTagName('IMG')[0];

      switch (title) {
        case 'head':
          this.selection.head = getPreviousValidIndex(
            this.selection.head,
            this.availableParts.heads.length,
          );
          break;
        case 'left-arm':
          this.selection.leftArm = getPreviousValidIndex(
            this.selection.leftArm,
            this.availableParts.arms.length,
          );
          break;
        case 'right-arm':
          this.selection.rightArm = getPreviousValidIndex(
            this.selection.rightArm,
            this.availableParts.arms.length,
          );
          break;
        case 'torso':
          this.selection.torso = getPreviousValidIndex(
            this.selection.torso,
            this.availableParts.torsos.length,
          );
          break;
        case 'base':
          this.selection.base = getPreviousValidIndex(
            this.selection.base,
            this.availableParts.bases.length,
          );
          break;
        default:
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.part {
  position: relative;
  width: 165px;
  height: 165px;
  border: 3px solid #aaa;
}
.part {
  img {
    width: 165px;
  }
}
.top-row {
  display: flex;
  justify-content: space-around;
}
.middle-row {
  display: flex;
  justify-content: center;
}
.bottom-row {
  display: flex;
  justify-content: space-around;
  border-top: none;
}
.head {
  border-bottom: none;
}
.left {
  border-right: none;
}
.right {
  border-left: none;
}
.left img {
  transform: rotate(-90deg);
}
.right img {
  transform: rotate(90deg);
}
.bottom {
  border-top: none;
}
.prev-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 171px;
}
.next-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 171px;
}
.center .prev-selector,
.center .next-selector {
  opacity: 0.8;
}
.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.right .prev-selector {
  top: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  right: -3px;
}
.robot-name {
  position: absolute;
  top: -25px;
  text-align: center;
  width: 100%;
}
.sale {
  color: red;
}
.content {
  position: relative;
}
.add-to-cart {
  position: absolute;
  right: 20px;
  width: 220px;
  font-size: 16px;
}
td,
th {
  text-align: left;
  padding: 5px;
  padding-right: 20px;
}
.cost {
  text-align: right;
}
.sale-border {
  border: 3px solid red;
}
</style>
