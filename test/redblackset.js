"use strict";{const a={};a.RBnode=function(a){this.tree=a,this.right=this.tree.sentinel,this.left=this.tree.sentinel,this.parent=null,this.color=!1,this.key=null},a.RedBlackSet=function(b){this.size=0,this.sentinel=new a.RBnode(this),this.sentinel.color=!1,this.root=this.sentinel,this.root.parent=this.sentinel,this.compare=b||this.default_compare},a.RedBlackSet.prototype.default_compare=function(c,a){return c<a?-1:a<c?1:0},a.RedBlackSet.prototype.clone=function(){var b=new a.RedBlackSet(this.compare);return b.insertAll(this),b},a.RedBlackSet.prototype.clear=function(){this.size=0,this.sentinel=new a.RBnode(this),this.sentinel.color=!1,this.root=this.sentinel,this.root.parent=this.sentinel},a.RedBlackSet.prototype.leftRotate=function(a){var b=a.right;a.right=b.left,b.left!=this.sentinel&&(b.left.parent=a),b.parent=a.parent,a.parent==this.sentinel?this.root=b:a==a.parent.left?a.parent.left=b:a.parent.right=b,b.left=a,a.parent=b},a.RedBlackSet.prototype.rightRotate=function(a){var b=a.left;a.left=b.right,b.right!=this.sentinel&&(b.right.parent=a),b.parent=a.parent,a.parent==this.sentinel?this.root=b:a==a.parent.right?a.parent.right=b:a.parent.left=b,b.right=a,a.parent=b},a.RedBlackSet.prototype.insert=function(b){if(!this.contains(b)){var c=new a.RBnode(this);c.key=b;for(var d=this.sentinel,e=this.root;e!=this.sentinel;)d=e,e=0>this.compare(c.key,e.key)?e.left:e.right;c.parent=d,d==this.sentinel?this.root=c:0>this.compare(c.key,d.key)?d.left=c:d.right=c,c.left=this.sentinel,c.right=this.sentinel,c.color=!0,this.insertFixup(c),this.size++}else{var f=this.get_(b);f.key=b}},a.RedBlackSet.prototype.insertFixup=function(a){for(;a!=this.sentinel&&a!=this.root&&a.parent.color==!0;)if(a.parent==a.parent.parent.left){var b=a.parent.parent.right;b.color==!0?(a.parent.color=!1,b.color=!1,a.parent.parent.color=!0,a=a.parent.parent):(a==a.parent.right&&(a=a.parent,this.leftRotate(a)),a.parent.color=!1,a.parent.parent.color=!0,a.parent.parent!=this.sentinel&&this.rightRotate(a.parent.parent))}else{var b=a.parent.parent.left;b.color==!0?(a.parent.color=!1,b.color=!1,a.parent.parent.color=!0,a=a.parent.parent):(a==a.parent.left&&(a=a.parent,this.rightRotate(a)),a.parent.color=!1,a.parent.parent.color=!0,a.parent.parent!=this.sentinel&&this.leftRotate(a.parent.parent))}this.root.color=!1},a.RedBlackSet.prototype.delete_=function(a){var b,c;b=a.left==this.sentinel||a.right==this.sentinel?a:this.successor_(a),c=b.left==this.sentinel?b.right:b.left,c.parent=b.parent,b.parent==this.sentinel?this.root=c:b==b.parent.left?b.parent.left=c:b.parent.right=c,b!=a&&(a.key=b.key),b.color==!1&&this.deleteFixup(c),this.size--},a.RedBlackSet.prototype.deleteFixup=function(a){for(;a!=this.root&&a.color==!1;)if(a==a.parent.left){var b=a.parent.right;b.color==!0&&(b.color=!1,a.parent.color=!0,this.leftRotate(a.parent),b=a.parent.right),b.left.color==!1&&b.right.color==!1?(b.color=!0,a=a.parent):(b.right.color==!1&&(b.left.color=!1,b.color=!0,this.rightRotate(b),b=a.parent.right),b.color=a.parent.color,a.parent.color=!1,b.right.color=!1,this.leftRotate(a.parent),a=this.root)}else{var b=a.parent.left;b.color==!0&&(b.color=!1,a.parent.color=!0,this.rightRotate(a.parent),b=a.parent.left),b.right.color==!1&&b.left.color==!1?(b.color=!0,a=a.parent):(b.left.color==!1&&(b.right.color=!1,b.color=!0,this.leftRotate(b),b=a.parent.left),b.color=a.parent.color,a.parent.color=!1,b.left.color=!1,this.rightRotate(a.parent),a=this.root)}a.color=!1},a.RedBlackSet.prototype.remove=function(a){var b=this.get_(a);if(b!=this.sentinel){var c=b.key;return this.delete_(b),c}return null},a.RedBlackSet.prototype.removeSwapped=function(a,b){this.remove(b)},a.RedBlackSet.prototype.min=function(a){for(;a.left!=this.sentinel;)a=a.left;return a},a.RedBlackSet.prototype.max=function(a){for(;a.right!=this.sentinel;)a=a.right;return a},a.RedBlackSet.prototype.successor_=function(a){if(a.right!=this.sentinel)return this.min(a.right);for(var b=a.parent;b!=this.sentinel&&a==b.right;)a=b,b=b.parent;return b},a.RedBlackSet.prototype.predeccessor_=function(a){if(a.left!=this.sentinel)return this.max(a.left);for(var b=a.parent;b!=this.sentinel&&a==b.left;)a=b,b=b.parent;return b},a.RedBlackSet.prototype.successor=function(a){if(0<this.size){var b=this.get_(a);if(b==this.sentinel)return null;if(b.right!=this.sentinel)return this.min(b.right).key;for(var c=b.parent;c!=this.sentinel&&b==c.right;)b=c,c=c.parent;return c==this.sentinel?null:c.key}return null},a.RedBlackSet.prototype.predecessor=function(a){if(0<this.size){var b=this.get_(a);if(b==this.sentinel)return null;if(b.left!=this.sentinel)return this.max(b.left).key;for(var c=b.parent;c!=this.sentinel&&b==c.left;)b=c,c=c.parent;return c==this.sentinel?null:c.key}return null},a.RedBlackSet.prototype.getMin=function(){return this.min(this.root).key},a.RedBlackSet.prototype.getMax=function(){return this.max(this.root).key},a.RedBlackSet.prototype.get_=function(a){for(var b=this.root;b!=this.sentinel&&0!=this.compare(b.key,a);)b=0>this.compare(a,b.key)?b.left:b.right;return b},a.RedBlackSet.prototype.contains=function(a){return null!=this.get_(a).key},a.RedBlackSet.prototype.getValues=function(){var a=[];return this.forEach(function(b){a.push(b)}),a},a.RedBlackSet.prototype.insertAll=function(b){if("array"==a.typeOf(b))for(var c=0;c<b.length;c++)this.insert(b[c]);else if("function"==a.typeOf(b.forEach))b.forEach(this.insert,this);else if("function"==a.typeOf(b.getValues))for(var d=b.getValues(),c=0;c<d.length;c++)this.insert(d[c]);else if("object"==a.typeOf(b))for(var e in b)this.insert(b[e])},a.RedBlackSet.prototype.removeAll=function(b){if("array"==a.typeOf(b))for(var c=0;c<b.length;c++)this.remove(b[c]);else if("function"==a.typeOf(b.forEach))b.forEach(this.removeSwapped,this);else if("function"==a.typeOf(b.getValues))for(var d=b.getValues(),c=0;c<d.length;c++)this.remove(d[c]);else if("object"==a.typeOf(b))for(var e in b)this.remove(b[e])},a.RedBlackSet.prototype.containsAll=function(b){if("array"==a.typeOf(b)){for(var c=0;c<b.length;c++)if(!this.contains(b[c]))return!1;return!0}if("function"==a.typeOf(b.forEach))return b.every(this.contains,this);if("function"==a.typeOf(b.getValues)){for(var d=b.getValues(),c=0;c<d.length;c++)if(!this.contains(d[c]))return!1;return!0}if("object"==a.typeOf(b)){for(var e in b)if(!this.contains(b[e]))return!1;return!0}},a.RedBlackSet.prototype.range=function(a,b){var c=[];return this.traverseFromTo(function(a){c.push(a)},a,b),c},a.RedBlackSet.prototype.traverse=function(a,b){if(!this.isEmpty())for(var c=this.min(this.root);c!=this.sentinel;){if(a.call(b,c.key,this))return;c=this.successor_(c)}},a.RedBlackSet.prototype.traverseFrom=function(a,b,c){if(!this.isEmpty())for(var d=this.get_(b);d!=this.sentinel;){if(a.call(c,d.key,this))return;d=this.successor_(d)}},a.RedBlackSet.prototype.traverseTo=function(a,b,c){if(!this.isEmpty())for(var d=this.min(this.root),e=this.get_(b);d!=e;){if(a.call(c,d.key,this))return;d=this.successor_(d)}},a.RedBlackSet.prototype.traverseFromTo=function(a,b,c,d){if(!this.isEmpty())for(var e=this.get_(b),f=this.get_(c);e!=f;){if(a.call(d,e.key,this))return;e=this.successor_(e)}},a.RedBlackSet.prototype.traverseBackwards=function(a,b){if(!this.isEmpty())for(var c=this.max(this.root);c!=this.sentinel;){if(a.call(b,c.key,this))return;c=this.predeccessor_(c)}},a.RedBlackSet.prototype.forEach=function(a,b){if(!this.isEmpty())for(var c=this.min(this.root);c!=this.sentinel;c=this.successor_(c))a.call(b,c.key,c.key,this)},a.RedBlackSet.prototype.some=function(a,b){if(this.isEmpty())return!1;for(var c=this.min(this.root);c!=this.sentinel;c=this.successor_(c))if(a.call(b,c.key,c.key,this))return!0;return!1},a.RedBlackSet.prototype.every=function(a,b){if(this.isEmpty())return!1;for(var c=this.min(this.root);c!=this.sentinel;c=this.successor_(c))if(!a.call(b,c.key,c.key,this))return!1;return!0},a.RedBlackSet.prototype.map=function(a,b){var c=[];if(this.isEmpty())return c;for(var d=this.min(this.root);d!=this.sentinel;d=this.successor_(d))c.push(a.call(b,d.key,d.key,this));return c},a.RedBlackSet.prototype.filter=function(a,b){var c=[];if(this.isEmpty())return c;for(var d=this.min(this.root);d!=this.sentinel;d=this.successor_(d))a.call(b,d.key,d.key,this)&&c.push(d.key);return c},a.RedBlackSet.prototype.getCount=function(){return this.size},a.RedBlackSet.prototype.isEmpty=function(){return 0==this.size},a.RedBlackSet.prototype.isSubsetOf=function(b){var c=a.getCount(b);if(this.getCount()>c)return!1;var d=0;if(this.isEmpty())return!0;for(var e=this.min(this.root);e!=this.sentinel;e=this.successor_(e))a.contains.call(b,b,e.key)&&d++;return d==this.getCount()},a.RedBlackSet.prototype.intersection=function(b){var c=new a.RedBlackSet(this.compare);if(this.isEmpty())return c;for(var d=this.min(this.root);d!=this.sentinel;d=this.successor_(d))b.contains.call(b,d.key,d.key,this)&&c.insert(d.key);return c},self.RedBlackSet=class{constructor(b){this._rbSet=new a.RedBlackSet(b)}Add(a){this._rbSet.insert(a)}Remove(a){this._rbSet.remove(a)}Has(a){return this._rbSet.contains(a)}Clear(){this._rbSet.clear()}toArray(){return this._rbSet.getValues()}GetSize(){return this._rbSet.getCount()}IsEmpty(){return this._rbSet.isEmpty()}ForEach(a){this._rbSet.forEach(a)}Front(){if(this.IsEmpty())throw new Error("empty set");const a=this._rbSet,b=a.min(a.root);return b.key}Shift(){if(this.IsEmpty())throw new Error("empty set");const a=this.Front();return this.Remove(a),a}*values(){if(!this.IsEmpty()){const a=this._rbSet;for(let b=a.min(a.root);b!=a.sentinel;b=a.successor_(b))yield b.key}}[Symbol.iterator](){return this.values()}}}