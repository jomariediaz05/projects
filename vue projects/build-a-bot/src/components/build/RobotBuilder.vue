<template>
  <div class="content">
    <button class="add-to-cart" @click="addToCart">Add to Cart</button>
    <div class="top-row">
      <PartSelector :parts="availableParts.heads" title="head" position="top"></PartSelector>
    </div>
    <div class="middle-row">
      <PartSelector :parts="availableParts.arms" title="left-arm" position="left"></PartSelector>
      <PartSelector :parts="availableParts.torsos" title="torso" position="center"></PartSelector>
      <PartSelector :parts="availableParts.arms" title="right-arm" position="right"></PartSelector>
    </div>
    <div class="bottom-row">
      <PartSelector :parts="availableParts.bases" title="base" position="bottom"></PartSelector>
    </div>
    <div>
      <h1>Cart</h1>
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
import availableParts from "../../data/parts";
import PartSelector from "./PartSelector.vue";

export default {
  name: "RobotBuilder",
  components: {
    PartSelector
  },
  data() {
    return {
      availableParts,
      selection: {
        head: 0,
        leftArm: 0,
        rightArm: 0,
        torso: 0,
        base: 0
      },
      cart: []
    };
  },
  computed: {
    saleBorderStyle() {
      return this.selectedParts.head.onSale ? "sale-border" : "";
    },
    selectedParts() {
      return {
        head: this.availableParts.heads[this.selection.head],
        leftArm: this.availableParts.arms[this.selection.leftArm],
        rightArm: this.availableParts.arms[this.selection.rightArm],
        torso: this.availableParts.torsos[this.selection.torso],
        base: this.availableParts.bases[this.selection.base]
      };
    }
  },
  methods: {
    addToCart() {
      const robot = this.selectedParts;
      console.log("TCL: addToCart -> robot", robot);

      // const cost =        robot.head.cost
      //   + robot.leftArm.cost
      //   + robot.rightArm.cost
      //   + robot.torso.cost
      //   + robot.base.cost;

      // this.cart.push(Object.assign({}, robot, { cost }));
    }
  }
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
