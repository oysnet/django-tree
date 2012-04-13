/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */
/* ************************************************************************

#asset(tree/icon/Grappelli/22/places/folder-open.png)
#asset(tree/icon/Grappelli/22/places/folder.png)

*/

qx.Theme.define("tree.theme.Appearance",
{
  extend : qx.theme.modern.Appearance,

  appearances :
  {
    "root" :
    {
      style : function(states)
      {
        return {
          backgroundColor : "transparent",
          textColor : "text",
          font : "default"
        };
      }
    },
    "gallery": 
    {
      style : function(states)
      {
        return {
          backgroundColor : "white"
        };
      }
    },
    "tree" :
    {
      style : function(states)
      {
        return {
          backgroundColor : "transparent"
        };
      }
    },
     "tree-item" :
    {
      style : function(states)
      {
        return {
          backgroundColor :  "transparent", //states.selected ? "#F4F4F4" : "transparent",
          font        : states.selected ? "bold" : undefined
        }
      }
    },
    "tree-folder" :
    {
      include : "tree-item",
      alias : "tree-item",

      style : function(states)
      {
        var icon, iconOpened;
        icon = states.opened ? "custom/22/places/folder-open.png" : "custom/22/places/folder.png";
        iconOpened = "custom/22/places/folder-open.png";
        icon = states.selected ?"custom/22/places/folder-open.png" : "custom/22/places/folder.png";
        return {
          icon : icon,
          iconOpened : iconOpened
        };
      }
    },
    "tree-item/open" :
    {
      include : "image",

      style : function(states)
      {
        var icon;
        if (states.selected && states.opened)
        {
          icon = "decoration/tree/open.png";
        }
        else if (states.selected && !states.opened)
        {
          icon = "decoration/tree/closed.png";
        }
        else if (states.opened)
        {
          icon = "decoration/tree/open.png";
        }
        else
        {
          icon = "decoration/tree/closed.png";
        }

        return {
          padding : [0, 5, 0, 2],
          source  : icon
        };
      }
    },
    "splitpane/splitter" : {
      style : function(states) {
        return {
          width : 1,
          backgroundColor : "background-splitpane"
        };
      }
    },
    "menu" :
    {
      style : function(states)
      {
        var useCSS = qx.core.Environment.get("css.gradient.linear") &&
          qx.core.Environment.get("css.boxshadow");

        var result =
        {
          decorator : useCSS ? "menu-css" : "menu",
          shadow : useCSS ? undefined : "shadow-popup",
          spacingX : 4,
          spacingY : 1,
          iconColumnWidth : 8,
          arrowColumnWidth : 4,
          placementModeY : states.submenu || states.contextmenu ? "best-fit" : "keep-align"
        };

        if (states.submenu)
        {
          result.position = "right-top";
          result.offset = [-2, -3];
        }

        return result;
      }
    },
    "menu-button" :
    {
      alias : "atom",

      style : function(states)
      {
        var decorator = states.selected ? "selected" : undefined;
        if (decorator && qx.core.Environment.get("css.gradient.linear")) {
          decorator += "-css";
        }

        return {
          decorator : decorator,
          textColor : states.selected ? "text-selected" : undefined,
          padding   : [ 4, 6 ]
        };
      }
    }

  }
});