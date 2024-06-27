export default {
  projections: {
    ПланТОE: {
      startDate: {
        __caption__: 'Дата начала'
      },
      endDate: {
        __caption__: 'Дата окончания'
      },
      equipment: {
        __caption__: 'Оборудование',
        name: {
          __caption__: 'Номер'
        },
        model: {
          __caption__: '',
          name: {
            __caption__: 'Модель оборудования'
          }
        },
        type: {
          __caption__: '',
          name: {
            __caption__: 'Тип оборудования'
          }
        },
        status: {
          __caption__: '',
          name: {
            __caption__: 'Статус оборудования'
          }
        },
        accountable: {
          __caption__: '',
          surname: {
            __caption__: 'Фамилия ответственного'
          }
        },
        serviceContract: {
          __caption__: '',
          number: {
            __caption__: 'Номер сервисного договора'
          }
        },
        location: {
          __caption__: '',
          name: {
            __caption__: 'Место расположения оборудования'
          }
        }
      },
      scheduledMaintenanceOperation: {
        __caption__: 'Плановые операции ТО',
        executionDate: {
          __caption__: 'Дата выполнения'
        },
        maintenanceOperation: {
          __caption__: 'Операция ТО',
          name: {
            __caption__: 'Наименование'
          }
        }
      }
    },
    ПланТОL: {
      startDate: {
        __caption__: 'Дата начала'
      },
      endDate: {
        __caption__: 'Дата окончания'
      },
      equipment: {
        __caption__: 'Номер',
        name: {
          __caption__: 'Номер'
        },
        model: {
          __caption__: '',
          name: {
            __caption__: 'Модель'
          },
          manufacturer: {
            __caption__: '',
            name: {
              __caption__: 'Производитель'
            }
          }
        }
      }
    }
  },
  validations: {
    startDate: {
      __caption__: 'Дата начала'
    },
    endDate: {
      __caption__: 'Дата окончания'
    },
    equipment: {
      __caption__: 'Оборудование'
    },
    scheduledMaintenanceOperation: {
      __caption__: 'Плановые операции ТО'
    }
  }
};
