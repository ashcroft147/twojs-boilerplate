import '../styles/index.scss';

// jquery, jquery-ui
import $ from 'jquery';
import 'jquery-ui/themes/base/base.css';
import 'jquery-ui/themes/base/core.css';
import 'jquery-ui/themes/base/theme.css';
import 'jquery-ui/themes/base/selectable.css';
import 'jquery-ui/ui/core';
import 'jquery-ui/ui/widgets/tabs';
import 'jquery-ui/ui/widgets/selectable';

import './graphic/bgColor.js';
import './graphic/bgPattern.js';
import './graphic/edgeRect.js';
import './graphic/rectSize.js';
import './graphic/refMaterial.js';

$(function() {
  $( "#tabs" ).tabs({
    collapsible: true
  });
});

