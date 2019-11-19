/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateActivity = `subscription OnCreateActivity {
  onCreateActivity {
    id
    tripid {
      id
      groupid {
        id
        groupname
      }
      tripdestination
      tripstart
      tripend
      thumpbnails
      status
    }
    activityname
    description
    title
    location
    cost
    status
    todos {
      id
      title
      description
      duedate
      startdate
      status
      owners {
        id
        username
        phone
      }
    }
  }
}
`;
export const onUpdateActivity = `subscription OnUpdateActivity {
  onUpdateActivity {
    id
    tripid {
      id
      groupid {
        id
        groupname
      }
      tripdestination
      tripstart
      tripend
      thumpbnails
      status
    }
    activityname
    description
    title
    location
    cost
    status
    todos {
      id
      title
      description
      duedate
      startdate
      status
      owners {
        id
        username
        phone
      }
    }
  }
}
`;
export const onDeleteActivity = `subscription OnDeleteActivity {
  onDeleteActivity {
    id
    tripid {
      id
      groupid {
        id
        groupname
      }
      tripdestination
      tripstart
      tripend
      thumpbnails
      status
    }
    activityname
    description
    title
    location
    cost
    status
    todos {
      id
      title
      description
      duedate
      startdate
      status
      owners {
        id
        username
        phone
      }
    }
  }
}
`;
export const onCreateTrip = `subscription OnCreateTrip {
  onCreateTrip {
    id
    groupid {
      id
      groupname
      groupmembers {
        id
        username
        phone
      }
      groupadmins {
        id
        username
        phone
      }
    }
    tripdestination
    tripstart
    tripend
    thumpbnails
    status
  }
}
`;
export const onUpdateTrip = `subscription OnUpdateTrip {
  onUpdateTrip {
    id
    groupid {
      id
      groupname
      groupmembers {
        id
        username
        phone
      }
      groupadmins {
        id
        username
        phone
      }
    }
    tripdestination
    tripstart
    tripend
    thumpbnails
    status
  }
}
`;
export const onDeleteTrip = `subscription OnDeleteTrip {
  onDeleteTrip {
    id
    groupid {
      id
      groupname
      groupmembers {
        id
        username
        phone
      }
      groupadmins {
        id
        username
        phone
      }
    }
    tripdestination
    tripstart
    tripend
    thumpbnails
    status
  }
}
`;
export const onCreateGroup = `subscription OnCreateGroup {
  onCreateGroup {
    id
    groupname
    groupmembers {
      id
      username
      phone
    }
    groupadmins {
      id
      username
      phone
    }
  }
}
`;
export const onUpdateGroup = `subscription OnUpdateGroup {
  onUpdateGroup {
    id
    groupname
    groupmembers {
      id
      username
      phone
    }
    groupadmins {
      id
      username
      phone
    }
  }
}
`;
export const onDeleteGroup = `subscription OnDeleteGroup {
  onDeleteGroup {
    id
    groupname
    groupmembers {
      id
      username
      phone
    }
    groupadmins {
      id
      username
      phone
    }
  }
}
`;
export const onCreateUsers = `subscription OnCreateUsers {
  onCreateUsers {
    id
    username
    phone
  }
}
`;
export const onUpdateUsers = `subscription OnUpdateUsers {
  onUpdateUsers {
    id
    username
    phone
  }
}
`;
export const onDeleteUsers = `subscription OnDeleteUsers {
  onDeleteUsers {
    id
    username
    phone
  }
}
`;
export const onCreateToDo = `subscription OnCreateToDo {
  onCreateToDo {
    id
    title
    description
    duedate
    startdate
    status
    owners {
      id
      username
      phone
    }
  }
}
`;
export const onUpdateToDo = `subscription OnUpdateToDo {
  onUpdateToDo {
    id
    title
    description
    duedate
    startdate
    status
    owners {
      id
      username
      phone
    }
  }
}
`;
export const onDeleteToDo = `subscription OnDeleteToDo {
  onDeleteToDo {
    id
    title
    description
    duedate
    startdate
    status
    owners {
      id
      username
      phone
    }
  }
}
`;
