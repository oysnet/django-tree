/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Theme.define("tree.theme.Decoration",
{
  extend : qx.theme.modern.Decoration,

  decorations :
  {
   "splitpane" :
    {
      decorator : qx.ui.decoration.Single,

      style :
      {
        backgroundColor : "transparent"
      }
    },
  
   "menu" :
    {
      decorator : qx.ui.decoration.Single,

      style :
      {
        backgroundColor : "#EEE",

        width : 1,
        color : "#D4D4D4",
        style : "solid"
      }
    },

   "menu-css" : {
      decorator : [
        qx.ui.decoration.MBackgroundColor,
        qx.ui.decoration.MBorderRadius,
        qx.ui.decoration.MSingleBorder
      ],
      style : {
        backgroundColor : "#EEE",
        width : 1,
        color : "border-main",
        width : 1,
        radius: 3
      }
    },
    
    /*
    ---------------------------------------------------------------------------
      WINDOW
    ---------------------------------------------------------------------------
    */

    "window" :
    {
      decorator: qx.ui.decoration.Single,

      style :
      {
        backgroundColor : "background-pane",

        width : 1,
        color : "border-main",
        widthTop : 0
      }
    },

    "window-captionbar-active" :
    {
      decorator : qx.ui.decoration.Grid,

      style : {
        baseImage : "decoration/window/captionbar-active.png"
      }
    },

    "window-captionbar-inactive" :
    {
      decorator : qx.ui.decoration.Grid,

      style : {
        baseImage : "decoration/window/captionbar-inactive.png"
      }
    },

    "window-statusbar" :
    {
      decorator : qx.ui.decoration.Grid,

      style : {
        baseImage : "decoration/window/statusbar.png"
      }
    },


    // CSS WINDOW
    "window-css" : {
      decorator : [
        qx.ui.decoration.MBorderRadius,
        qx.ui.decoration.MBoxShadow,
        qx.ui.decoration.MSingleBorder
      ],
      style : {
        radius : 5,
        shadowBlurRadius : 4,
        shadowLength : 2,
        shadowColor : "shadow"
      }
    },

    "window-incl-statusbar-css" : {
       include : "window-css",
       style : {
         radius : 5
       }
    },

    "window-resize-frame-css" : {
      decorator : [
        qx.ui.decoration.MBorderRadius,
        qx.ui.decoration.MSingleBorder
      ],
      style : {
        radius :5,
        width : 1,
        color : "border-main"
      }
    },

    "window-resize-frame-incl-statusbar-css" : {
       include : "window-resize-frame-css",
       style : {
         radius : 5
       }
    },

    "window-captionbar-active-css" : {
      decorator : [
        qx.ui.decoration.MSingleBorder,
        qx.ui.decoration.MBorderRadius,
        qx.ui.decoration.MLinearBackgroundGradient
      ],
      style : {
        width : 1,
        color : "window-caption-active-end",
        colorBottom : "window-border-caption",
        radius : [5,5,0,0],
        gradientStart : ["window-caption-active-start", 30],
        gradientEnd : ["window-caption-active-end", 70]
      }
    },

    "window-captionbar-inactive-css" : {
      include : "window-captionbar-active-css",
      style : {
        gradientStart : ["window-caption-inactive-start", 30],
        gradientEnd : ["window-caption-inactive-end", 70]
      }
    },

    "window-statusbar-css" :
    {
      decorator : [
        qx.ui.decoration.MBackgroundColor,
        qx.ui.decoration.MSingleBorder,
        qx.ui.decoration.MBorderRadius
      ],

      style : {
        backgroundColor : "window-statusbar-background",
        width: [0, 1, 1, 1],
        color: "window-border",
        radius : 5
      }
    },

    "window-pane-css" :
    {
      decorator: [
        qx.ui.decoration.MSingleBorder,
        qx.ui.decoration.MBackgroundColor
      ],

      style :
      {
        backgroundColor : "background-pane",
        width : 1,
        color : "window-border",
        widthTop : 0
      }
    }
  }
});