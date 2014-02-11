<?php

/**
 * @file
 * Template to display a views row in vertical_tabs.
 *
 * @ingroup views_templates
 */
?>
<div id="image-collage-grid" class=" overlay-inactive">
    <div class="flex-container">
        <div class="flexslider">
    <ul class="slides">
<?php foreach($blocks as $id => $b):
    $col_id = ($id / 2) - (($id % 2) / 2);
    $row_id = $id % 2;

?>
        <?php if (!($id % 2)): ?>
            <li>
        <?php endif; ?>
        <div id="img-block-<?php echo $id ?>" class="img-block" data-id="<?php echo $id ?>" data-col="<?php echo $col_id ?>" data-row="<?php echo $row_id ?>">
            
            <?php echo $b['img']; ?>
            <div class="quote-bg" data-id="<?php echo $id ?>">
                
            </div>
            <div class="quote" data-id="<?php echo $id ?>">
                <div class="mini-overlay-close-btn close-btn">X</div>
                <div class="image-collage-overlay-thumbnail">
                <?php echo $b['img']; ?>
                </div>
                <?php echo $b['quote']; ?>
                <div class="image-collage-name">
                    &mdash; <?php echo $b['name'] ?>
                </div>
            </div>
        </div>
        <?php if (($id % 2)): ?>
            </li>
        <?php endif; ?>
    
<? endforeach; ?>
    </ul>
</div>
        </div>
    <div class="image-collage-overlays">
        
        <?php foreach($blocks as $id => $b): ?>
            <div class="overlay" id="overlay-<?php echo $id ?>">
                <div class="image-collage-overlay-container">
                        
                    <span class="large-overlay-close-btn close-btn">X</span>
                    <div class="image-collage-overlay-left">
                        <div class="image-collage-overlay-thumbnail">
                            <?php echo $b['img'] ?>
                        </div>
                        <div class="image-collage-details">
                            
                            <div>
                                <span class="image-collage-name">
                                    <?php echo $b['name'] ?>
                                </span>
                            </div>
                            <span class="image-collage-tagline"><?php echo $b['tagline'] ?></span>
                        </div>
                    </div>
                    <div class="image-collage-overlay-right">
                        <?php echo $b['bio']; ?>
                    </div>
                
                
                </div>
            </div>
        <? endforeach; ?>
    </div>
</div>
<div class="image-collage-overlay-bg">
    
</div>