class GroupMenuController {
  constructor($document, $mdDialog, $state, GroupService, CurrentGroup) {
    "ngInject";
    Object.assign(this, {
      $document,
      $mdDialog,
      $state,
      GroupService,
      groups: [],
      CurrentGroup
    });
  }
  $onInit() {
    this.GroupService.listMy().then((data) => {
      this.groups = data;
    });
  }

  groupButton() {
    if (angular.isDefined(this.CurrentGroup.value.id)) {
      this.$state.go("group", { groupId: this.CurrentGroup.value.id });
    } else {
      this.$state.go("home");
    }
  }

  openJoinGroupDialog($event) {
    this.$mdDialog.show({
      parent: this.$document.body,
      targetEvent: $event,
      template: "<md-dialog style='height:80%'><join-group></join-group></md-dialog>"
    }).then((groupId) => {
      this.$state.go("group", { groupId });
    });
  }
}

export default GroupMenuController;
