<script>
// import Button from '@/components/Button/Button.vue'
import Badge from '@/components/Badge/Badge.vue'

export default {
  name: 'ButtonView',
  components: {
    // Button,
    Badge
  }
}
</script>

<template>
  <!-- <div class="flex justify-start ml-2 mt-2">
    <Badge
      text="Primary"
      
      class="mr-2"
      badgeClass="badge badge-primary "
    ></Badge>
    <Badge
      text="Secondary"
      icon="material-symbols:star-outline-rounded"
      class="mr-2"
      badgeClass="badge badge-secondary"
    ></Badge>
    <Badge
      text="Warning"
      icon="material-symbols:star-outline-rounded"
      class="mr-2"
      badgeClass="badge badge-warning"
    ></Badge>
    <Badge
      text="Success"
      icon="material-symbols:star-outline-rounded"
      class="mr-2"
      badgeClass="badge badge-success"
    ></Badge>
    <Badge
      text="Danger"
      icon="material-symbols:star-outline-rounded"
      class="mr-2"
      badgeClass="badge badge-danger"
    ></Badge>
    <Badge
      text="Info"
      icon="material-symbols:star-outline-rounded"
      class="mr-2"
      badgeClass="badge badge-info"
    ></Badge>
  </div>

  <div class="flex justify-start ml-2 mt-2">
    <Badge
      text="Primary"
      icon="material-symbols:star-outline-rounded"
      class="mr-2"
      badgeClass="badge badge-pill-primary "
    ></Badge>
    <Badge
      text="Secondary"
      icon="material-symbols:star-outline-rounded"
      class="mr-2"
      badgeClass="badge badge-pill-secondary"
    ></Badge>
    <Badge
      text="Warning"
      icon="material-symbols:star-outline-rounded"
      class="mr-2"
      badgeClass="badge badge-pill-warning"
    ></Badge>
    <Badge
      text="Success"
      icon="material-symbols:star-outline-rounded"
      class="mr-2"
      badgeClass="badge badge-pill-success"
    ></Badge>
    <Badge
      text="Danger"
      icon="material-symbols:star-outline-rounded"
      class="mr-2"
      badgeClass="badge badge-pill-danger"
    ></Badge>
    <Badge
      text="Info"
      icon="material-symbols:star-outline-rounded"
      class="mr-2"
      badgeClass="badge badge-pill-info"
    ></Badge>
  </div>

  <div class="flex justify-start ml-2 mt-2">
    <Badge text="Primary" class="mr-2" badgeClass="badge badge-primary "></Badge>
    <Badge text="Secondary" class="mr-2" badgeClass="badge badge-secondary"></Badge>
    <Badge text="Warning" class="mr-2" badgeClass="badge badge-warning"></Badge>
    <Badge text="Success" class="mr-2" badgeClass="badge badge-success"></Badge>
    <Badge text="Danger" class="mr-2" badgeClass="badge badge-danger"></Badge>
    <Badge text="Info" class="mr-2" badgeClass="badge badge-info"></Badge>
  </div>

  <div class="flex justify-start ml-2 mt-2">
    <Badge text="Primary" class="mr-2" badgeClass="badge badge-pill-primary "></Badge>
    <Badge text="Secondary" class="mr-2" badgeClass="badge badge-pill-secondary"></Badge>
    <Badge text="Warning" class="mr-2" badgeClass="badge badge-pill-warning"></Badge>
    <Badge text="Success" class="mr-2" badgeClass="badge badge-pill-success"></Badge>
    <Badge text="Danger" class="mr-2" badgeClass="badge badge-pill-danger"></Badge>
    <Badge text="Info" class="mr-2" badgeClass="badge badge-pill-info"></Badge>
  </div>

  <div class="flex justify-start ml-2 mt-2">
    <Badge
      icon="material-symbols:star-outline-rounded"
      class="mr-2"
      badgeClass="badge badge-pill-primary "
    ></Badge>
    <Badge
      icon="material-symbols:star-outline-rounded"
      class="mr-2"
      badgeClass="badge badge-pill-secondary"
    ></Badge>
    <Badge
      icon="material-symbols:star-outline-rounded"
      class="mr-2"
      badgeClass="badge badge-pill-warning"
    ></Badge>
    <Badge
      icon="material-symbols:star-outline-rounded"
      class="mr-2"
      badgeClass="badge badge-pill-success"
    ></Badge>
    <Badge
      icon="material-symbols:star-outline-rounded"
      class="mr-2"
      badgeClass="badge badge-pill-danger"
    ></Badge>
    <Badge
      icon="material-symbols:star-outline-rounded"
      class="mr-2"
      badgeClass="badge badge-pill-info"
    ></Badge>
  </div>

  <div class="flex justify-start ml-2 mt-2">
    <Badge
      icon="material-symbols:star-outline-rounded"
      class="mr-2"
      badgeClass="badge badge-primary "
    ></Badge>
    <Badge
      icon="material-symbols:star-outline-rounded"
      class="mr-2"
      badgeClass="badge badge-secondary"
    ></Badge>
    <Badge
      icon="material-symbols:star-outline-rounded"
      class="mr-2"
      badgeClass="badge badge-warning"
    ></Badge>
    <Badge
      icon="material-symbols:star-outline-rounded"
      class="mr-2"
      badgeClass="badge badge-success"
    ></Badge>
    <Badge
      icon="material-symbols:star-outline-rounded"
      class="mr-2"
      badgeClass="badge badge-danger"
    ></Badge>
    <Badge
      icon="material-symbols:star-outline-rounded"
      class="mr-2"
      badgeClass="badge badge-info"
    ></Badge>
  </div>

  <div class="flex justify-start ml-2 mt-2">
    <Badge class="mr-2" badgeClass="badge badge-primary"></Badge>
    <Badge class="mr-2" badgeClass="badge badge-secondary"></Badge>
    <Badge class="mr-2" badgeClass="badge badge-warning"></Badge>
    <Badge class="mr-2" badgeClass="badge badge-success"></Badge>
    <Badge class="mr-2" badgeClass="badge badge-danger"></Badge>
    <Badge class="mr-2" badgeClass="badge badge-info"></Badge>
  </div>

  <div class="flex justify-start ml-2 mt-2">
    <Badge class="mr-2" badgeClass="badge badge-pill-primary"></Badge>
    <Badge class="mr-2" badgeClass="badge badge-pill-secondary"></Badge>
    <Badge class="mr-2" badgeClass="badge badge-pill-warning"></Badge>
    <Badge class="mr-2" badgeClass="badge badge-pill-success"></Badge>
    <Badge class="mr-2" badgeClass="badge badge-pill-danger"></Badge>
    <Badge class="mr-2" badgeClass="badge badge-pill-info"></Badge>
  </div>

  <div class="flex justify-start ml-2 mt-2">
    <Badge class="mr-2" text="99" badgeClass="badge badge-primary"></Badge>
    <Badge class="mr-2" text="99" badgeClass="badge badge-secondary"></Badge>
    <Badge class="mr-2" text="99" badgeClass="badge badge-warning"></Badge>
    <Badge class="mr-2" text="99" badgeClass="badge badge-success"></Badge>
    <Badge class="mr-2" text="99" badgeClass="badge badge-danger"></Badge>
    <Badge class="mr-2" text="99" badgeClass="badge badge-info"></Badge>
  </div>

  <div class="flex justify-start ml-2 mt-2">
    <Badge class="mr-2" text="99" badgeClass="badge badge-pill-primary"></Badge>
    <Badge class="mr-2" text="99" badgeClass="badge badge-pill-secondary"></Badge>
    <Badge class="mr-2" text="99" badgeClass="badge badge-pill-warning"></Badge>
    <Badge class="mr-2" text="99" badgeClass="badge badge-pill-success"></Badge>
    <Badge class="mr-2" text="99" badgeClass="badge badge-pill-danger"></Badge>
    <Badge class="mr-2" text="99" badgeClass="badge badge-pill-info"></Badge>
  </div>

  <div class="flex justify-start ml-2 mt-2">
    <Button text="test badge" btnClass="btn btn-sm btn-primary relative mr-3 mt-3">
      <Badge badgeClass="badge badge-pill-danger absolute -right-2 -top-2" text="9"></Badge>
    </Button>

    <Button text="test badge" btnClass="btn btn-primary relative mr-3 mt-3">
      <Badge badgeClass="badge badge-pill-danger absolute -right-2 -top-2" text="99"></Badge>
    </Button>

    <Button text="test badge" btnClass="btn btn-lg btn-primary relative mr-3 mt-3">
      <Badge
        badgeClass="badge badge-pill-danger absolute -right-2 -top-2"
        text="99+"

      ></Badge>
    </Button>
  </div>

  <div class="flex justify-start ml-2 mt-2">
    <Button text="test badge" btnClass="btn btn-sm btn-primary relative mr-3 mt-3">
      <Badge
        badgeClass="badge badge-pill-danger absolute -right-2 -top-2"
        icon="material-symbols:star-outline-rounded"
      ></Badge>
    </Button>

    <Button text="test badge" btnClass="btn btn-primary relative mr-3 mt-3">
      <Badge
        badgeClass="badge badge-pill-danger absolute -right-2 -top-2"
        icon="material-symbols:star-outline-rounded"
      ></Badge>
    </Button>

    <Button text="test badge" btnClass="btn btn-lg btn-primary relative mr-3 mt-3">
      <Badge
        badgeClass="badge badge-pill-danger absolute -right-2 -top-2"
        icon="material-symbols:star-outline-rounded"
      ></Badge>
    </Button>
  </div>

  <div class="flex justify-start ml-2 mt-2">
    <Button text="test badge" btnClass="btn btn-sm btn-primary  mr-3 mt-3">
      <Badge
        badgeClass="badge badge-danger inline-flex ml-1"
        icon="material-symbols:star-outline-rounded"
      ></Badge>
    </Button>

    <Button text="test badge" btnClass="btn btn-primary flex mr-3 mt-3">
      <Badge badgeClass="badge badge-pill-danger ml-1" text="9"></Badge>
    </Button>

    <Button text="test badge" btnClass="btn btn-lg btn-primary  mr-3 mt-3">
      <Badge
        badgeClass="badge badge-pill-danger ml-1"
        icon="material-symbols:star-outline-rounded"
      ></Badge>
    </Button>
  </div>

  <div class="flex justify-start ml-2 mt-2">
    <Button text="test badge" btnClass="btn btn-sm btn-primary relative mr-3 mt-3">
      <Badge badgeClass="badge badge-pill-danger inline-flex absolute -right-2 -top-2"></Badge>
    </Button>

    <Button text="test badge" btnClass="btn btn-primary flex mr-3 mt-3 relative">
      <Badge badgeClass="badge badge-pill-danger absolute -right-2 -top-2"></Badge>
    </Button>

    <Button text="test badge" btnClass="btn btn-primary relative mr-3 mt-3">


    </Button>
  </div> -->
</template>

<style lang="scss"></style>
