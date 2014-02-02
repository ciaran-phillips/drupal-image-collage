<?php

/**
 * @file
 * Template to display a views row in vertical_tabs.
 *
 * @ingroup views_templates
 */
?>
<div class="image-collage-grid overlay-inactive">
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
        <div class="img-block" data-id="<?php echo $id ?>" data-col="<?php echo $col_id ?>" data-row="<?php echo $row_id ?>">    
            <?php echo $b['img']; ?>
            <div class="quote-bg" data-id="<?php echo $id ?>"></div>
            <div class="quote" data-id="<?php echo $id ?>">
                
                <?php echo $b['quote']; ?>
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
                        
                    <span class="image-collage-close-button">X</span>
                    <div class="image-collage-overlay-left">
                        <div class="image-collage-overlay-thumbnail">
                            <?php echo $b['img'] ?>
                        </div>
                        <div class="image-collage-details">
                            <span class="image-collage-name"><?php echo $b['name'] ?></span>
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