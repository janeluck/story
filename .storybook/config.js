import { configure } from '@storybook/react';




function loadStories() {
    // require('../stories/InputButtonPanel');
    require('../stories/SvgIcon');
/*     require('../stories/DateRangePicker_input');
    require('../stories/DateRangePicker_calendar');
    require('../stories/DateRangePicker_day');
    require('../stories/SingleDatePicker');
    require('../stories/SingleDatePicker_input');
    require('../stories/SingleDatePicker_calendar');
    require('../stories/SingleDatePicker_day');
    require('../stories/DayPickerRangeController');
    require('../stories/DayPickerSingleDateController');
    require('../stories/DayPicker');
    require('../stories/PresetDateRangePicker'); */
  }
  

  
  configure(loadStories, module);